const Notification = ({message}) => {
    const notificationStyle = {
        color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  border: '4px solid green',
  borderRadius: 6,
  padding: 10,
  marginBottom: 10,
    }
    if (message === null) {
        return null
    }
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}
export default Notification