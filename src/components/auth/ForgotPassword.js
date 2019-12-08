import React, { useState } from 'react';
import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { FormStyle1 } from '../reusableStyles/form/Form';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { H1 } from '../reusableStyles/typography/Typography';
import { Section } from '../reusableStyles/sections/Sections';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = e => setEmail(e.target.value);

  const onSubmitHandler = async e => {
    e.preventDefault();
    console.log('Your Email', email);
  };

  return (
    <Section>
      <H1> Login Today</H1>
      <FormStyle1 onSubmit={onSubmitHandler}>
        <InputStyle1
          onChange={e => handleChange(e)}
          type="email"
          placeholder="Your Email"
          value={email}
          name="email"
          required
        />

        <ButtonStyle2 type="submit">Submit</ButtonStyle2>
      </FormStyle1>
    </Section>
  );
};

export default ForgotPassword;
