import Header from '../components/Header/index'
import {render, screen, fireEvent, act } from '@testing-library/react';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


let component = null;
beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );
    expect(component.container).toBeInTheDocument();
})

test('Renderizado del slogan',() => {
    expect(screen.getAllByText('Sentite como en tu hogar'));
})