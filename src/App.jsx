
import './App.css'
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;

function App() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="bg-container">
        <div className="card">
          <p className='contact-p'>Contact Us</p>
          <h2>Make an Appointment</h2>
          <h4 className='book'>Book Appointment</h4>

          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="input-container">
              <Form.Item
                // label="Fullname"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your fullname!',
                  },
                ]}
              >
                <label htmlFor="">Name *</label>

                <Input placeholder='Full Name * ' />
              </Form.Item>

              <Form.Item
                // label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <label htmlFor="">Email address *</label>

                <Input placeholder='Email * ' />
              </Form.Item>
              <Form.Item
                // label="Department"
                name="department"
                rules={[
                  {
                    required: true,
                    message: 'Please input department!',
                  },
                ]}
              >
                <label htmlFor="">Departement *</label>

                <Input placeholder='Please Select' />
              </Form.Item>
              <Form.Item
                // label="Time"
                name="time"
                rules={[
                  {
                    required: true,
                    message: 'Please input time!',
                  },
                ]}
              >
                <label htmlFor="">Time *</label>

                <Input placeholder='4:00 Available' />
              </Form.Item>

              <Form.Item
              // label="TextArea"

              >
                <label htmlFor="" className='textField-label'>Message</label>
                <TextArea rows={4} className='textField' />
              </Form.Item>
            </div>
            <Form.Item >
              <Button className='submit-btn'>Book Appointment</Button>
            </Form.Item>
          </Form>


        </div>
      </div>
    </>
  )
}

export default App
