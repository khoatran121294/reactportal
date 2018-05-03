import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedDate, FormattedTime, FormattedMessage } from 'react-intl';
import { SELECT_LOCALE } from "../../../actions";
import AppConfig from "../../../config";

import './DemoIntl.css';

class DemoIntl extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div className="DemoIntl">
        <h1>Demo <a href="https://github.com/yahoo/react-intl" target="_blank" rel="noopener noreferrer">React-Intl</a></h1>
        <div className="LanguagesSelection">
          {
            AppConfig.availableLanguages.map(item => (
              <label className="LanguageOption" key={item.id}>
                <input
                  type="radio"
                  name="languages"
                  value={item.id}
                  checked={lang === item.id}
                  onChange={this.onSelectLocale.bind(this, item)} />{item.language}
              </label>
            )
            )
          }
        </div>
        <div className="LanguageData">
          <div className="txtFormattedMessage">
            <FormattedMessage
              id='app.hello'
              defaultMessage='this language is unvailable'
              values={{
                name: 'Khoa'
              }} />
          </div>
          <div>
            <span className="txtFormattedDate">
              <FormattedDate
                value={new Date()}
                year='numeric'
                month='long'
                day='2-digit'
              />
            </span>
            <FormattedTime value={new Date()} />
          </div>
        </div>
      </div>
    );
  }
  onSelectLocale(_selectedLocale) {
    this.props.selectLocale(_selectedLocale.id);
    this.setState({
      selectedLocale: Object.assign({}, _selectedLocale)
    });
  }
}

const mapStateToProps = state => {
  return { ...state.locale };
};
const mapDispatchToProps = dispatch => {
  return {
    selectLocale: (lang) => {
      dispatch({ type: SELECT_LOCALE, lang });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoIntl);
