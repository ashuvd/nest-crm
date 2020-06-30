interface Navigation {
  id: number,
  name: string,
  url: string,
  icon: string
}
interface User {
  id: number,
  login: string,
  password: string,
}
interface CreateUserDto {
  login: string,
  password: string
  repeatPassword: string
}
interface Setting {
  id: number,
  ip: string,
  port: string,
}
interface CreateOrUpdateSettingDto {
  ip: string,
  port: string,
}
interface Course {
  id: number,
  name: string,
  description: string,
  price: number
}
interface CreateCourseDto {
  name: string,
  description: string,
  price: number
}
