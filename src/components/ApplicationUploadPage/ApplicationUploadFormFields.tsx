import { Input } from "components/FormInputs";
import { Option } from "components/DropDownComponent/Option";
//numbers like postal codes, are set as text in text_type

const ApplicationFormInputFields: Input[] = [{
    id: 1,
    size:"medium",
    name: "workshop_name",
    type: "text",
    text_type: "text",
    placeholder: "Raj's Car Shop",
    errorMessage:
        "Workshop name should be 3-50 characters and shouldn't include any special character and Numbers!",
    label: "Workshop name",
    minlen:3,
    maxlen:50,
    pattern: /^[A-Za-z,' ]{3,50}$/,
    required: true,
},
{
    id: 2,
    size:"medium",
    name: "workshop_post_code",
    type: "text",
    text_type: "text",
    placeholder: "600062",
    pattern: /^\d{6}$/,
    minlen:6,
    maxlen:6,
    errorMessage: "It should be a valid postcode!",
    label: "Workshop postcode",
    required: true,
},
{
    id: 3,
    size:"medium",
    name: "address",
    type: "text",
    text_type:"text",
    placeholder: "Abj 11th cross street, silk mill",
    errorMessage: "It should be a valid address!",
    label: "Address",
    minlen: 15,
    maxlen:1000,
    pattern: /^[a-zA-Z0-9 ,.-]+$/,
    required: true,
},
{
    id: 4,
    size:"medium",
    name: "state",
    type: "text",
    text_type:"text",
    placeholder: "Tamil Nadu",
    errorMessage:
        "It should be a valid state!",
    label: "State",
    minlen:3,
    maxlen:50,
    pattern: /^[A-Za-z\s]+$/,
    required: true,
},
{
    id: 5,
    size:"medium",
    name: "city",
    type: "text",
    text_type:"text",
    placeholder: "Vellore",
    errorMessage: "It should be a valid City!",
    label: "City",
    minlen:3,
    maxlen:100,
    pattern: /^[A-Za-z\s]+$/,// only alphabets allowed
    required: true,
},
{
    id: 6,
    size:"medium",
    name: "user_name",
    type: "text",
    text_type:"text",
    placeholder: "Rajesh",
    errorMessage: "Workshop name should be 3-16 characters and shouldn't include any special character and Numbers!",
    label: "Your Name",
    minlen:3,
    maxlen:16,
    pattern: /^[A-Za-z\s]{3,16}$/,
    required: true,
},
{
    id: 7,
    size:"medium",
    name: "user_email",
    type: "hidden",
    text_type:"hidden",
    placeholder: "raj_car@gmail.com",
    errorMessage:"It should be a valid email address!",
    label: "Your Email",
    minlen:5,
    maxlen:100,
},
{
    id: 8,
    size:"medium",
    name: "user_mobile",
    type: "text",
    text_type:"text",
    placeholder: "04422221234",
    errorMessage: "Mobile No. should be 11-12 digit(including country code)!",
    label: "Your telephone number",
    //minlen:15,
    //maxlen:16,
    //pattern:/^\+\d{1,2}\ \d{3}-\d{3}-\d{4}$/,
    minlen:11,
    maxlen:12,
    pattern:   /\d{11,12}/,
    required: true,
},
{
    id: 9,
    size:"medium",
    name: "bay_count",
    type: "text",
    text_type:"number",
    placeholder: "4",
    errorMessage: "Please enter a valid number of bays!",
    label: "Number of bays in your workshop",
    pattern:/\d{1,10}/,
    minlen:1,
    maxlen:10,
    required: true,
},
{
    id: 10,
    size:"medium",
    name: "services_offered",
    type: "dropdown",
    text_type:"string",
    compulsorylist:[{ value: 'Oil Change', label: 'Oil Change', isFixed: true },
    { value: 'Fluid Checks', label: 'Fluid Checks', isFixed: true },
    { value: 'Routine Maintenance', label: 'Routine Maintenance', isFixed: true },],
    optionlist:[
      { value: 'Filter Replacements', label: 'Filter Replacements' },
      { value: 'Brake Services', label: 'Brake Services' },
      { value: 'Tire Services', label: 'Tire Services',  },
      { value: 'Exhaust System Inspection', label: 'Exhaust System Inspection' },
      { value: 'Diagnostic Services', label: 'Diagnostic Services' },
      { value: 'Battery Checks and Replacements', label: 'Battery Checks and Replacements',  },
    ],
    placeholder: "Bodywork, Paint Jobs",
    errorMessage:"Please enter a valid services that are offered",
    label: "Services Offered",
    required: true,

},
{
    id: 11,
    size:"medium",
    name: "expertise",
    type: "dropdown",
    text_type:"text",
    compulsorylist:[],
    optionlist:[
      { value: 'Hybrid and Electric Luxury Cars', label: 'Hybrid and Electric Luxury Cars' },
      { value: 'German Cars', label: 'German Car' },
      { value: 'Luxury SUV', label: 'Luxury SUV' },
      { value: 'Exotic Car', label: 'Exotic Car' },
      { value: 'Classic Luxury Car', label: 'Classic Luxury Car' },
    ],
    placeholder: "German Cars",
    errorMessage: "It should be a valid expertise!",
    label: "Expertise",
    required: true,
},
{
    id: 12,
    size:"medium",
    name: "brands",
    type: "text",
    text_type:"text",
    placeholder: "ABC,BCA",
    errorMessage: "Workshop name should be 3-16 characters and shouldn't include any special character and Numbers!",
    label: "Manufacturer Specializations",
    pattern: /^[A-Za-z,\s]+$/,
    minlen:5,
    maxlen:1000,
    required: true,
},
{
    id: 13,
    size:"medium",
    name: "file_paths",
    type: "string[]",
    label: "File Upload",
    // pattern: "^[A-Za-z]{3,16}$",
    required: true,
},
{
    id: 14,
    size:"medium",
    name: "consent_process_data",
    type: "checkbox",
    label: "I consent to having my data processed according to the privacy statement",
    //errorMessage:"Click to continue.",
    required: true,
},
{
    id: 15,
    size:"medium",
    name: "consent_being_contacted",
    type: "checkbox",
    label: "I consent to being contacted by a Castrol distributor for the purpose of discussing my interest in joining the Castrol network",
    //errorMessage:"Click to continue.",
    required: true,
},
{
    id: 16,
    size:"medium",
    name: "consent_receive_info",
    type: "checkbox",
    label: "I am interested in receiving additional information by email on Castrol products or services from time to time",
    //errorMessage:"Click to continue.",
    required: false,
},
  ]

  export default ApplicationFormInputFields;