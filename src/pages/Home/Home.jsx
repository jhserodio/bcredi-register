import React from 'react';
import Type from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';

import style from './Home.module.css';
import { Input } from '../../components/Input/Input';
import { Button, BtnIcon } from '../../components/Button';
import { IconLock, IconLoad, IconView, IconHide } from '../../components/Icon';
import { FORM, INPUT_TYPE } from '../../constants/form';
import { CheckBox } from '../../components/CheckBox/CheckBox';

let Home = ({
  intl: { formatMessage },
  form,
  inputSetValue,
  inputSetValid,
  setPolicy,
  inputSetDirty,
  inputSetType,
  submit,
}) => (
  <div className={style.Home}>
    <header className={style.header}>
      <h2 className={style.title}>
        <FormattedMessage id="home.title" />
      </h2>
      <p className={style.message}>
        <FormattedMessage id="home.message" />
      </p>
    </header>
    <div className={style.content}>
      <form
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}>
        <div className={style.row}>
          <Input
            {...form.input[FORM.EMAIL]}
            name={FORM.EMAIL}
            setValid={inputSetValid}
            setDirty={inputSetDirty}
            required
            label={formatMessage({ id: `home.form.${FORM.EMAIL}.label` })}
            onChange={e => {
              e.preventDefault();
              inputSetValue({
                value: e.target.value,
                index: FORM.EMAIL,
              });
            }}
            placeholder={formatMessage({
              id: `home.form.${FORM.EMAIL}.placeholder`,
            })}
          />
        </div>
        <div className={`${style.row} ${style._half}`}>
          <Input
            {...form.input[FORM.CPF]}
            name={FORM.CPF}
            setValid={inputSetValid}
            setDirty={inputSetDirty}
            mask="999.999.999-99"
            required
            label={formatMessage({ id: `home.form.${FORM.CPF}.label` })}
            onChange={e => {
              e.preventDefault();
              inputSetValue({
                value: e.target.value,
                index: FORM.CPF,
              });
            }}
          />
          <Input
            {...form.input[FORM.BIRTH_DAY]}
            name={FORM.BIRTH_DAY}
            setValid={inputSetValid}
            setDirty={inputSetDirty}
            required
            label={formatMessage({ id: `home.form.${FORM.BIRTH_DAY}.label` })}
            onChange={e => {
              inputSetValue({
                value: e.target.value,
                index: FORM.BIRTH_DAY,
              });
            }}
          />
        </div>
        <div className={style.row}>
          <Input
            {...form.input[FORM.PASSWORD]}
            name={FORM.PASSWORD}
            setValid={inputSetValid}
            setDirty={inputSetDirty}
            required
            min={6}
            label={formatMessage({ id: `home.form.${FORM.PASSWORD}.label` })}
            onChange={e => {
              e.preventDefault();
              inputSetValue({
                value: e.target.value,
                index: FORM.PASSWORD,
              });
            }}
            placeholder={formatMessage({
              id: `home.form.${FORM.PASSWORD}.placeholder`,
            })}
            drawer={
              <BtnIcon
                onClick={() =>
                  inputSetType({
                    type:
                      form.input[FORM.PASSWORD].type === INPUT_TYPE.PASSWORD
                        ? INPUT_TYPE.TEXT
                        : INPUT_TYPE.PASSWORD,
                    index: FORM.PASSWORD,
                  })
                }>
                {form.input[FORM.PASSWORD].type === INPUT_TYPE.PASSWORD ? (
                  <IconView className={style.iconPass} />
                ) : (
                  <IconHide className={style.iconPass} />
                )}
              </BtnIcon>
            }
          />
        </div>
        <div className={style.row}>
          <CheckBox
            name={FORM.POLICY}
            value={form[FORM.POLICY]}
            onChange={() => {
              setPolicy(!form[FORM.POLICY]);
            }}>
            {formatMessage({ id: `home.form.${FORM.POLICY}.phrase` })}{' '}
            <a href="/policy-privacy">
              {formatMessage({ id: `home.form.${FORM.POLICY}.privacy` })}
            </a>{' '}
            {formatMessage({ id: `home.form.${FORM.POLICY}.and` })}{' '}
            <a href="/use">
              {formatMessage({ id: `home.form.${FORM.POLICY}.use` })}
            </a>
          </CheckBox>
        </div>
        <div className={style.row}>
          <Button className={style.submit} type="submit">
            {form.submiting ? (
              <IconLoad className={style.spining} />
            ) : (
              <span className={style.btnContainer}>
                <IconLock className={style.icon} />
                {formatMessage({ id: 'home.form.submit' })}
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
    <footer className={style.footer}>
      <span className={style.message}>
        <FormattedMessage id="home.footer.message" />
      </span>
      <a href="/any-think" className={style.link}>
        <FormattedMessage id="home.footer.link" />
      </a>
    </footer>
  </div>
);

Home.propTypes = {
  intl: intlShape.isRequired,
  inputSetValue: Type.func.isRequired,
  inputSetValid: Type.func.isRequired,
  inputSetType: Type.func.isRequired,
  inputSetDirty: Type.func.isRequired,
  setPolicy: Type.func.isRequired,
  submit: Type.func.isRequired,
  form: Type.shape({
    submiting: Type.bool,
    input: Type.object,
  }).isRequired,
};

Home = injectIntl(Home);

export { Home };
