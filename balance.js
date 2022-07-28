function Balance(){
  const [status, setStatus]     = React.useState('');
  const [data, setData]     = React.useState('');
  const ctx = React.useContext(UserContext); 

function findAccount() {
  if (ctx.user !== '') { 
    fetch(`/account/balance/${ctx.email}`)
    .then(response => response.json())
    .then(data => setData('$' + data[0].balance));
  } else {
    setStatus('Please login to your account');
    setTimeout(() => setStatus(''), 3000);
  }
}

return (
  <Card
    bgcolor="primary"
    header="Balance"
    text={data}
    status={status}
    body={
      <>
      <button type="submit" className="btn btn-light" onClick={findAccount}>See Account Balance</button>
      </>
      }
  />
)
    }
