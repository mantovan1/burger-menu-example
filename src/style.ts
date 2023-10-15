import styled from 'styled-components';

export const styledApp = styled.div`
    height: 100vh;
    width: 100vw;

    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: center;

        width: 100%;
        height: 50px;
        background-color: black;
    }

    .navbar_content {
        display: flex;
        flex-direction: row;

        width: 93%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        color: white;
    }

    .openmenu {
        width: 50px;
        height: 50px;

        cursor: pointer;
    }

    .menu {
        position: absolute;

        will-change: transform;

        width: 35%;

        border-top: 5px solid #d3d3d3;

        transition: 600ms ease;

        left: -35%;
        z-index: 9999;
    }

    .visible {
        will-change: transform;

        transition: 600ms ease;

        left: 0;
    }

    .submenu {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: flex-start;

        background-color: black;
    }

    .submenu .item {
        width: calc(100% - 40px);
        border-bottom: 1px solid gray;
        color: white;
        font-weight: bold;

        text-align: center;

        padding: 20px;

        cursor: pointer;
    }

    .submenu .item:hover {
        background-color: #272727;
    }

    .content {
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 20px;

        justify-items: center;
    }

    .content .item {
        display: flex;
        flex-direction: column;
        height: max-content;
        width: 260px;

        justify-content: flex-start;
        align-items: center;

        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        margin: 10px;
    }

    .content .item .img {
        width: 250px;
        height: 250px;
        border-radius: 5%;

        padding: 10px;
    }

    .content .item .name {
        font-size: 22px;
        font-weight: bold;
        margin-top: 10px;
    }

    .content .item .price {
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 10px;
        opacity: 0.6;
    }

    @media screen and (max-width: 900px) {
        .content {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 600px) {
        .menu {
            position: absolute;
    
            will-change: transform;
    
            width: 85%;
    
            border-top: 5px solid #d3d3d3;
    
            transition: 600ms ease;
    
            left: -85%;
            z-index: 9999;
        }
    
        .visible {
            will-change: transform;
    
            transition: 600ms ease;
    
            left: 0;
        }

        .content {
            grid-template-columns: 1fr;
        }

        .content .item {
            width: 250px;
        }

        .content .item .img {
            width: 200px;
            height: 200px;
        }
    }
      
`