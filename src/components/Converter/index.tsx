import { Button, Col, Form, Row } from "react-bootstrap";
import { IConverter } from "../../interfaces";
import { useEffect, useRef, useState } from "react";
import { convert } from "../../services/currency";
import { useMainContext } from "../../contexts/main";

export default function Converter({ from, to }: IConverter) {
  const { baseCurrency, firstCurrency, secondCurrency, thirdCurrency } =
    useMainContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async () => {
    if (from && to) {
      const res: { [key: string]: number } = await convert(from, [to]);
      const converted = Object.values(res)[0];

      if (inputRef.current) {
        setValue(inputRef.current.valueAsNumber * converted || 0);
      }
    }
  };

  useEffect(() => {
    setDisabled(
      !baseCurrency || !firstCurrency || !secondCurrency || !thirdCurrency
    );
  }, [baseCurrency, firstCurrency, secondCurrency, thirdCurrency]);

  return (
    <Col>
      <Row>
        <Col>
          <Row className="g-0">
            {from} para {to}
          </Row>
          <Row className="d-flex gap-2 align-items-center g-0">
            <Form.Control defaultValue={1} min={1} ref={inputRef} type="number" disabled={disabled} />
            <Button onClick={onSubmit} disabled={disabled}>
              Converter
            </Button>
          </Row>
          <Row className="g-0">
            <span className="text-center font-weight-bold">{value.toFixed(2)}</span>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
