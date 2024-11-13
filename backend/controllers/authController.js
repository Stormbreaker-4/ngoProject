const { Donor } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { name, pwd } = req.body
        if (!name || !pwd) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const foundDonor = await Donor.findOne({ where: { name } })
        if (!foundDonor) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

        const match = await bcrypt.compare(pwd, foundDonor.pwd)
        if (!match) return res.status.json(401).json({ message: 'Unauthorized' })

        const accessToken = jwt.sign(
            {
                "DonorInfo": {
                    "donorname": foundDonor.name,
                    "roles": foundDonor.roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '8h' }
        )

        const refreshToken = jwt.sign(
            { "donorname": foundDonor.name },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        // Create secure cookie with refresh token
        res.cookie('jwt', refreshToken, {
            httpOnly: true, // accessible only by web server
            secure: true, // https
            sameSite: 'None', // cross-site cookie
            maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiry: set to match rT
        })

        // Send accessToken containing username and roles
        res.json({ accessToken })

    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    }
}

const refresh = (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' });
        const refreshToken = cookies.jwt;

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) return res.status(403).json({ message: 'Forbidden' })
                const foundDonor = await Donor.findOne({ where: { name: decoded.name } })
                if (!foundDonor) return res.status(401).json({ message: 'Unauthorized' })

                const accessToken = jwt.sign(
                    {
                        "DonorInfo": {
                            "donorname": foundDonor.name,
                            "roles": foundDonor.roles
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '8h' }
                )
                res.json({ accessToken })
            }
        )

    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    }
}

const logout = (req, res) => {
    try {
        const cookies = req.cookies
        if (!cookies?.jwt) return res.sendStatus(204) // No content
        res.clearCookie('jwt', {
            httpOnly: true, sameSite: 'None', secure: true
        })
        res.json({ message: 'Cookie cleared' })
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    }
}

module.exports = {
    login,
    refresh,
    logout
};