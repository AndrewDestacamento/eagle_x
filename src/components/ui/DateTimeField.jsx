import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDateTimeLocal } from "../../services/eventInstance/eventInstanceUtils.js";

// Date + time picker. The value is the same "YYYY-MM-DDTHH:mm" local string the
// old datetime-local inputs used. The time list offers 15-minute shortcuts, but
// any minute can be typed and is kept exactly as entered.
export default function DateTimeField({
    name,
    value,
    onChange,
    required = false,
    className = "",
}) {
    function handleChange(date) {
        // Same shape as an input change event, so existing field handlers still work.
        onChange({
            target: { name, value: date ? formatDateTimeLocal(date) : "" },
        });
    }

    return (
        <DatePicker
            name={name}
            selected={value ? new Date(value) : null}
            onChange={handleChange}
            showTimeSelect
            timeIntervals={15}
            dateFormat="MM/dd/yyyy h:mm aa"
            timeFormat="h:mm aa"
            autoComplete="off"
            required={required}
            className={`w-full ${className}`}
            wrapperClassName="block w-full"
        />
    );
}
