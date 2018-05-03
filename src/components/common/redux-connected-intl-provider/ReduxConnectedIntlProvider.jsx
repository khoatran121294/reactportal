import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const { lang, messages } = state.locale;
    return { locale: lang, key: lang, messages };
};

export default connect(mapStateToProps)(IntlProvider);