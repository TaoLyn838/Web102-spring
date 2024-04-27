export const convertToTimeAgo = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = Math.abs(now - date)
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) {
    return `${days}d ago`
  } else if (hours > 0) {
    return `${hours}h ago`
  } else if (minutes > 0) {
    return `${minutes}m ago`
  } else {
    return 'Just now'
  }
}

const GlobalFunctions = {
  convertToTimeAgo,
}
export default GlobalFunctions
