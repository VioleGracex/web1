import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="bg-gray-200 rounded-[55px] text-gray-900 py-[85px] px-[125px] mb-[80px] mt-[-122px] wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="font-bold tracking-[0.5px] leading-[1.2em]">
              Подпишитесь на нашу рассылку<br /> & Никогда не пропускайте последние обновления
            </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="relative flex items-center bg-white p-1 rounded-[20px]">
                <div className="absolute inset-[-1px] bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] rounded-[20px]"></div>
                <div className="absolute inset-0 bg-white rounded-[20px]"></div>
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Адрес электронной почты" 
                  className="w-full text-gray-900 font-medium bg-transparent border-0 px-[15px] py-[10px] rounded-[20px] relative z-10" 
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white font-medium py-[20px] px-[65px] rounded-[18px] relative z-10"
                >
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
