import { Col, Container, Form, Row } from "react-bootstrap";
import { Converter } from "./components";
import { CURRENCIES_NAMES, CURRENCIES_SIGNS } from "./enums";
import { useMainContext } from "./contexts/main";

function App() {
  const {
    setBaseCurrency,
    setFirstCurrency,
    setSecondCurrency,
    setThirdCurrency,
    baseCurrency,
    firstCurrency,
    secondCurrency,
    thirdCurrency,
  } = useMainContext();

  return (
    <Container>
      <Col>
        <Row className="py-2">
          <Col>
            <Form.Select
              value={baseCurrency || ""}
              onChange={(e) => {
                const { value } = e.target;

                setBaseCurrency(value as keyof typeof CURRENCIES_SIGNS);
              }}
            >
              <option value="">Selecione</option>
              {Object.keys(CURRENCIES_NAMES).map((key: string) => (
                <option value={key}>{CURRENCIES_NAMES[key]}</option>
              ))}
            </Form.Select>
          </Col>
          <Col className="d-flex gap-2">
            <Form.Select
              value={firstCurrency || ""}
              disabled={!baseCurrency}
              onChange={(e) => {
                const { value } = e.target;

                setFirstCurrency(value as keyof typeof CURRENCIES_SIGNS);
              }}
            >
              <option value="">Selecione</option>
              {Object.keys(CURRENCIES_NAMES)
                .map((key: string) => (
                  <option value={key}>{CURRENCIES_NAMES[key]}</option>
                ))}
            </Form.Select>
            <Form.Select
              value={secondCurrency || ""}
              disabled={!baseCurrency}
              onChange={(e) => {
                const { value } = e.target;

                setSecondCurrency(value as keyof typeof CURRENCIES_SIGNS);
              }}
            >
              <option value="">Selecione</option>
              {Object.keys(CURRENCIES_NAMES)
                .map((key: string) => (
                  <option value={key}>{CURRENCIES_NAMES[key]}</option>
                ))}
            </Form.Select>
            <Form.Select
              value={thirdCurrency || ""}
              disabled={!baseCurrency}
              onChange={(e) => {
                const { value } = e.target;

                setThirdCurrency(value as keyof typeof CURRENCIES_SIGNS);
              }}
            >
              <option value="">Selecione</option>
              {Object.keys(CURRENCIES_NAMES)
                .map((key: string) => (
                  <option value={key}>{CURRENCIES_NAMES[key]}</option>
                ))}
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="py-2">
              <Converter from={firstCurrency} to={baseCurrency} />
            </div>

            <div className="py-2">
              <Converter from={baseCurrency} to={firstCurrency} />
            </div>
          </Col>
          <Col>
            <div className="py-2">
              <Converter from={secondCurrency} to={baseCurrency} />
            </div>
            <div className="py-2">
              <Converter from={baseCurrency} to={secondCurrency} />
            </div>
          </Col>
          <Col>
            <div className="py-2">
              <Converter from={thirdCurrency} to={baseCurrency} />
            </div>
            <div className="py-2">
              <Converter from={baseCurrency} to={thirdCurrency} />
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default App;
