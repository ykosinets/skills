import '../styles/style.scss';

//3rd party
import './helpers/jquery'
import 'select2';

//custom
import './helpers/vh';
import './helpers/loading';

//initializations

// select2
$('.select2-wrapper select').select2({
  minimumResultsForSearch: -1,
});
