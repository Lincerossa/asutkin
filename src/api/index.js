import emailjs from 'emailjs-com';
import axios from "axios"


const USER_ID = 'user_RzOeBfHiUI3fyazEDHNQO'
const SERVER_ID = 'smtp_server'

export const contactUs = (formValues) => {
  return addToCrm(formValues);
/*  return emailjs.send(SERVER_ID,'contactForm', {
    ...formValues,
    content_html: JSON.stringify(formValues)
  }, USER_ID)*/
}

export const requestPlan = (formValues) => {
  return addToCrm(formValues);
  /*return emailjs.send(SERVER_ID,'requestPlan', {
    ...formValues,
    content_html: JSON.stringify(formValues)
  }, USER_ID)*/
}

const addToCrm = (formValues) => {

  console.log(formValues);
  let request={};
  let data = {};
  data.fields=[];
  if(formValues['email'])
    data.fields.push({ name: 'email', value: formValues['email']});
  if(formValues['firstname'])
  data.fields.push({ name: 'firstname', value: formValues['firstname'] });
  if(formValues['company'])
  data.fields.push({ name: 'company', value: formValues['company'] });
  if(formValues['lastname'])
  data.fields.push({ name: 'lastname', value: formValues['lastname'] });
  if(formValues['phoneFixedLine'])
  data.fields.push({ name: 'phone', value: formValues['phone'] });
  if(formValues['comments'])
  data.fields.push({ name: 'message', value: formValues['comments'] });
  if(formValues['privacy'][0])
  data.fields.push({ name: 'privacy', value: formValues['privacy'][0] });

  if(formValues['industry'])
    request.industry= formValues['industry'];
  if(formValues['endCustomers'])
    request.endCustomers= formValues['endCustomers'];
  if(formValues['flows'])
    request.flows= formValues['flows'];
  if(formValues['orders'])
    request.orders= formValues['orders'];
  if(formValues['organisations'])
    request.organisations= formValues['organisations'];
  if(formValues['users'])
    request.users= formValues['users'];
  if(formValues['additionalModules'])
    request.additionalModules= formValues['additionalModules'];

  data.fields.push({ name: 'initialrequest', value: JSON.stringify(request) });

  axios
    .post(`https://api.hsforms.com/submissions/v3/integration/submit/7383346/6fc3b817-8e8c-402b-b412-b8cd27cb66da`, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8"
      }
    })
    .then(response => {
      return response;
    });
  console.log("Done");

}