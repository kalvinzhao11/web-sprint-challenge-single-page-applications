import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'your name must have 3 characters'),
    side: yup
        .string()
        .oneOf(['fries'], 'you must pick a side'),
    sauce: yup
        .string()
        .oneOf(['red', 'ranch', 'bbq', 'alfredo'], 'you must pick a sauce'),
    special: yup
        .string()
        .max(250, 'your message can not be longer than 250 characters'),

})

export default formSchema 