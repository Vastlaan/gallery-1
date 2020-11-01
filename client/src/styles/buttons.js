import styled from "styled-components";
import { fonts } from "./fonts.js";
import { respond } from "./respond";

export const Button1 = styled.button`
    width: 20rem;
    height: 5rem;
    color: ${(p) => p.theme.grey8};
    border: 1px solid ${(p) => p.theme.secondary};
    background-color: transparent;
    font-family: ${fonts.para1};
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 2;

    &:after {
        content: "";
        display: block;
        background-color: ${(p) => p.theme.secondary};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
        z-index: -1;
    }

    &:hover {
        border: 1px solid ${(p) => p.theme.grey3};
        color: ${(p) => p.theme.grey3};
        &:after {
            top: 100%;
        }
    }

    &:focus,
    :active {
        outline: none;
    }
`;
export const Button2 = styled.button`
    width: 20rem;
    height: 5rem;
    color: ${(p) => (p.color ? p.color : p.theme.grey6)};
    border: 1px solid transparent;
    background-color: transparent;
    font-family: ${fonts.para1};
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 0 0.3rem ${(p) => (p.color ? p.color : p.theme.grey6)};
    z-index: 2;

    &:after {
        content: "";
        display: block;
        border-radius: 1rem;
        box-shadow: 0 0 0.5rem ${(p) => (p.color ? p.color : p.theme.grey6)};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
        z-index: -1;
    }

    &:hover {
        color: ${(p) => (p.color ? p.color : p.theme.grey6)};
        &:after {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    &:focus,
    :active {
        outline: none;
    }
`;

export const SocialButton1 = styled.button`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(p) => (p.color ? p.color : p.theme.grey8)};
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    ${(p) =>
        respond(
            "l",
            `border: 1px solid ${p.color ? p.color : p.theme.secondary};`
        )}

    &:hover {
        transform: scale(1.2);
    }
    svg {
        font-size: 2.3rem;
        color: ${(p) => p.theme.grey8};
        ${(p) =>
            respond("l", `color: ${p.color ? p.color : p.theme.secondary};`)}
    }
`;
