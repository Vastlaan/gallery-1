import React from "react";
import styled from "styled-components";
import { respond } from "../../styles";

export default function Layout({ children }) {
    return <Container>{children}</Container>;
}

const Container = styled.main`
    position: relative;
    padding-top: 5rem; // place for navbar if navbar has different height, this value should also adjust
    width: 100%;
    min-height: 100vh;
    background-color: ${(p) => p.theme.grey8};
    ${() => respond("xl", "width: 1366px; margin: 0 auto;")}
    ${() => respond("tv", "width: 2560px; margin: 0 auto;")}
`;
