import React from 'react';
import { Field, Input } from 'pipeline-ui'

export default {
  title: 'Field'
}

export const field = () => (
  <Field label="Public address">
    <Input required={true}/>
  </Field>
)
