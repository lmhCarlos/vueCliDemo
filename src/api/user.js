import request from '@/utils/request'

export function getList (data) {
  return request.get(data)
}
