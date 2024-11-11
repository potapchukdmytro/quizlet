import { Dispatch } from "@reduxjs/toolkit";
import { AuthActionTypes, IAuthAction, ILoginValues, IUserModel, ILoginResponse } from "./types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ServiceResponse from "../../../serviceResponse";

export const login =
    (values: ILoginValues) => async (dispatch: Dispatch<IAuthAction>) => {
        try {
            const response = await axios.post<ServiceResponse<ILoginResponse>>(
                "https://localhost:5000/api/account/signin",
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const { data } = response;

            localStorage.setItem("aut", data.payload.accessToken);
            localStorage.setItem("rut", data.payload.refreshToken);

            const jwt = jwtDecode<IUserModel>(data.payload.accessToken);

            const user: IUserModel = {
                id: jwt.id,
                email: jwt.email,
                firstName: jwt.firstName,
                lastName: jwt.lastName,
                role: jwt.role
            };

            dispatch({ type: AuthActionTypes.SIGN_IN, payload: user });
        } catch (error) {
            console.log("login error", error);
        }
    };
