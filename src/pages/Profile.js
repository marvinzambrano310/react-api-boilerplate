import React from 'react';
import {Descriptions} from 'antd';
import {useAuth} from "../providers/Auth";
import {useCategoriesUser} from '../data/useCategoriesUser';


const ProfilePage = () => {
    console.log(useAuth().currentUser);
    const data = useAuth().currentUser;
    const id = data.id;
    const categories = useCategoriesUser(id);
    console.log(categories);
    return <>
        <h1 className='title'>
            Perfil de Usuario
        </h1>

        <div>
            <Descriptions
                bordered
                column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}
            >
                <Descriptions.Item label="Nombre">{data.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
                <Descriptions.Item label="Editorial">{data.editorial}</Descriptions.Item>
                <Descriptions.Item label="Biografía">{data.short_bio}</Descriptions.Item>
                <Descriptions.Item label="Registrado el">{data.created_at}</Descriptions.Item>
                <Descriptions.Item label="Categories">
                    {
                        categories.isLoading
                            ? <div>Cargando...</div>
                            : categories.categories.map((category, index) =>
                                <ul key={index}>
                                    <li>{category.name}</li>
                                </ul>
                            )
                    }
                </Descriptions.Item>
            </Descriptions>
        </div>
    </>;
};

export default ProfilePage;