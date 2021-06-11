import React, {useState} from "react";

export const TodoForm: React.FC = () => {

    const [title, setTitle] = useState<string>()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setTitle('')
        }

    }


    return <div className='input-field mt2'>
        <input
            onChange={changeHandler}
            type="text" value={title}

            id='title'
            placeholder='Write down name...'
            onKeyPress={onKeyPressHandler}

        />
        <label htmlFor="title" className='active'>Name for TODO</label>

    </div>
}