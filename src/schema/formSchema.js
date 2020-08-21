import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'your name must have 3 characters'),
    size: yup
        .string()
        .oneOf(['small','median','large'], 'you must pick a side'),
    side: yup
        .string()
        .oneOf(['fries'], 'you must pick a side'),
    sauce: yup
        .string()
        .oneOf(['red', 'ranch', 'bbq', 'alfredo'], 'you must pick a sauce'),
    special: yup
        .string()
        .max(250, 'your message can not be longer than 250 characters'),
    glutenFree: yup
        .bool()
        .oneOf([true, false]),

})

export default formSchema 