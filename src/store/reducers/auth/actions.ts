import { Dispatch } from "@reduxjs/toolkit";
import { AuthActionTypes, IAuthAction, ILoginValues, IUserModel, ILoginResponse } from "./types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ServiceResponse from "../../../serviceResponse";
import { APP_ENV } from "../../../env";

export interface ActionResult {
    success: boolean;
    message: string;
};

export const login =
    (values: ILoginValues) => async (dispatch: Dispatch<IAuthAction>): Promise<ActionResult> => {
        try {
            const response = await axios.post<ServiceResponse<ILoginResponse>>(
                APP_ENV.API_URL + "account/signin",
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

            const result: ActionResult = {
                success: true,
                message: "Успішний вхід"
            };

            return result;
        } catch (error) {
            console.log("login error", error);

            const result: ActionResult = {
                success: false,
                message: "Не вдалося увійти"
            };

            return result;
        }
    };
