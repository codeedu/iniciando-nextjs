// @flow 
import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { User } from '../../models/user';
interface UserShowProps{
    user: User;
};

const UserShow: NextPage<UserShowProps> = (props) => {
    const {user} = props;
    return (
        <div>
            {user.name} - {user.email}
        </div>
    );
};

export default UserShow;

export const getServerSideProps : GetServerSideProps = async (context) => {
    const {
        params: {id}
    } = context
    const {data} = await axios.get(`http://app:3000/api/users/${id}`);
    
    return {
        props: {
            user: data
        }
    }
}