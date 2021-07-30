import * as Styled from '../../components/button/button.styles';
import * as StyledPage from './profile.styles';

function ProfilePage() {
    return (
        <StyledPage.CardProfile >
            <StyledPage.ContentContainer >
                <StyledPage.ProfilePic src="./images/thefuture7.jpg" />

                <StyledPage.InfoContainer>
                    <StyledPage.Container >
                        <StyledPage.User>USERNAME</StyledPage.User>
                        <StyledPage.Email>useremail@gmail.com</StyledPage.Email>
                    </StyledPage.Container>

                    <StyledPage.Container >
                        <Styled.Button customwidth="100%" customheight="30%" style={{ marginBottom: '5%' }}>CHANGE PASSWORD</Styled.Button>
                        <Styled.Button customwidth="100%" customheight="30%">CHANGE EMAIL</Styled.Button>
                    </StyledPage.Container>
                </StyledPage.InfoContainer>
            </StyledPage.ContentContainer>

            <StyledPage.LoggoutContainer>
                <Styled.Button customwidth="100%" customheight="10%" >EXIT</Styled.Button>
            </StyledPage.LoggoutContainer>
        </StyledPage.CardProfile>
    );
};

export default ProfilePage;