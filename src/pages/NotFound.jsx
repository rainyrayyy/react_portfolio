import { Link } from 'react-router-dom';

function NotFound() {
return (
<div style={{ textAlign: 'center', padding: '100px' }}>
{'404 Page Not Found'}
<br />
<Link to="/">Back to Home</Link>
</div>
);
}
export default NotFound;