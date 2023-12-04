import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../redux/userRedux';

const ProfileContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  flex: 0.2;
  background-color: #000; 
  color: #fff; 
  padding: 20px;
`;

const NavLink = styled.div`
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #c0a080; 
  }
`;

const LogoutButton = styled.button`
  background-color: #f00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px; 
  width: 100%; 
  &:hover {
    background-color: #c00;
  }
`;

const Content = styled.div`
  flex: 0.8;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

function ProfileSettings() {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    dispatch(Logout());
    navigate('/');
  };

  return (
    <ProfileContainer>
      <Sidebar>
        <NavLink onClick={() => navigate('/profile-settings/address-book')}>Address Book</NavLink>
        <NavLink onClick={() => navigate('/profile-settings/payment-method')}>Payment Method</NavLink>
        <NavLink onClick={() => navigate('/profile-settings/manage-account')}>Manage My Account</NavLink>
        <NavLink onClick={() => navigate('/profile-settings/preferences')}>Preferences</NavLink>
        <NavLink onClick={() => navigate('/profile-settings/more')}>More</NavLink>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Sidebar>
      <Content>
        <Section>
          <Title>My Profile Settings</Title>
        </Section>
      </Content>
    </ProfileContainer>
  );
}

export default ProfileSettings;
