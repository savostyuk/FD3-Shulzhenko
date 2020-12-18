"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from "../components/MobileClient";

const client =   {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200};

test ('Работа кнопки Удалить', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
        <MobileClient key={client.id} info={client} />
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.find( el => el.props.className==='buttonDelete');
    // и "нажмём" на неё
    buttonElem.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // "нажмём" кнопку ещё раз
    buttonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

});