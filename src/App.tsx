import React from 'react'
import "./app.css"
import { ChangeProfessionBlock } from './components/blocks/ChangeProfessionBlock/ChangeProfessionBlock'
import { HowWorkingBlock } from './components/blocks/HowWorkingBlock/HowWorkingBlock'
import { QuestionsBlock } from './components/blocks/QuestionsBlock/QuestionsBlock'
import { Footer } from './components/Footer/Footer'
import { ArticlesBlock } from './components/blocks/ArticlesBlock/ArticlesBlock'
import { Form } from './components/blocks/Form/Form'
import { ReviewsBlock } from './components/blocks/ReviewsBlock/ReviewsBlock'

export function App() {

    return (
        <>
        <ChangeProfessionBlock/>
        <HowWorkingBlock/>
        <ReviewsBlock/>
        <QuestionsBlock/>
        <ArticlesBlock/>
        <Form/>
        <Footer/>
        </>
    )
}
