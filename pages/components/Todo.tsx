import {FC} from 'react'

interface TodoProps {
    body: string
    id: number
    isCompleted: boolean
    dispatch: any
}


const Todo: FC<TodoProps> = ({body, id, isCompleted, dispatch}) => {

    return (
        <div className='flex flex-col pt-5'>
            <h3 className='font-semibold text-md uppercase pb-2'>{body}</h3>
            <div className='flex gap-3'>
                <button onClick={() => dispatch({type: 'TOGGLE_TODO', payload: id})} className={`border-[2px] font-semibold text-[#414141] ${isCompleted ? 'border-[red]' : ' border-[#1F1F1F]'} px-5 py-3`}>Toggle</button>
                <button onClick={() => dispatch({type: 'DELETE_TODO', payload: id})} className='border-[2px] font-semibold text-[#414141] border-[#1F1F1F] px-5 py-2'>Delete</button>
            </div>
        </div>
    )

}

export default Todo