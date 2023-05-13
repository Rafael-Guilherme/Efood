class Restaurant {
  title: string
  grade: number
  image: string
  description: string
  star: string
  type: string
  info: string
  week: string
  id: number

  constructor(
    title: string,
    grade: number,
    image: string,
    description: string,
    star: string,
    type: string,
    info: string,
    week: string,
    id: number
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.grade = grade
    this.star = star
    this.type = type
    this.info = info
    this.week = week
    this.id = id
  }
}

export default Restaurant
