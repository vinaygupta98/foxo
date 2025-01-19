export interface FormField {
    id: string;
    type: 'text' | 'checkbox' | 'switch' | 'textarea';
    label: string;
    placeholder?: string;
    required: boolean;
}

interface FormValues {
    [key: string]: string | boolean | undefined;
}

interface ValidationErrors {
    [key: string]: string;
}

const validateForm = (fields: FormField[], values: FormValues): ValidationErrors => {
    const errors: ValidationErrors = {}; // Explicitly define the type

    fields.forEach(field => {
        const value = values[field.id];

        // Check for required fields
        if (field.required && !value) {
            errors[field.id] = `${field.label} is required.`;
            return;
        }

        // Additional validation based on field type
        switch (field.type) {
            case 'text':
                if (field.id === 'email' && value) {
                    // Validate email format
                    const emailPattern =
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                    if (typeof value === 'string' && !emailPattern.test(value)) {
                        errors[field.id] = 'Please enter a valid email address.';
                    }
                }
                break;

            case 'checkbox':
            case 'switch':
                if (field.required && !value) {
                    errors[field.id] = `You must agree to the ${field.label}.`;
                }
                break;

            case 'textarea':
                // Optionally check for length or other conditions
                if (field.required && typeof value === 'string' && value.trim().length === 0) {
                    errors[field.id] = `${field.label} is required.`;
                }
                break;

            default:
                break;
        }
    });

    return errors;
};

export default validateForm;
