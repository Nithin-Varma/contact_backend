import asyncHandler from 'express-async-handler';

export const registerUser = asyncHandler(async (req, res) => {
    
    res.json({
        message: "Register the user"
    })
});

export const loginUser = asyncHandler(async (req, res) => {
    res.json({
        message: "login the user"
    })
});

export const currentUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Current user Information"
    })
});