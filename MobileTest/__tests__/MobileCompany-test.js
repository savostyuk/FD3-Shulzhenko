"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from "../components/MobileCompany";

const clientsArr=[
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200},
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250},
    {id:110, fam:"Петров", im:"Петр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
];

test ('Работа кнопки Все', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
        <MobileCompany clients={clientsArr}/>
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.find( el => el.props.className==='showAll');
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

test ('Работа кнопки Активные', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
        <MobileCompany clients={clientsArr}/>
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.find( el => el.props.className==='showActive');
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

test ('Работа кнопки Заблокированные', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
        <MobileCompany clients={clientsArr}/>
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.find( el => el.props.className==='showBlocked');
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