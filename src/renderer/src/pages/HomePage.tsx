import { Button } from '@renderer/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@renderer/components/ui/card'

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-4xl font-bold mb-10">Epsilon</h1>
      <h2 className="text-3xl font-medium">Все игры</h2>
      <div className="my-5 flex flex-wrap gap-5 items-start justify-start">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Название игры</CardTitle>
            <CardDescription>1231231</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Текст игры</p>
          </CardContent>
          <CardFooter>
            <Button>Скачать</Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Название игры</CardTitle>
            <CardDescription>1231231</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Текст игры</p>
          </CardContent>
          <CardFooter>
            <Button>Скачать</Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Название игры</CardTitle>
            <CardDescription>1231231</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Текст игры</p>
          </CardContent>
          <CardFooter>
            <Button>Скачать</Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Название игры</CardTitle>
            <CardDescription>1231231</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Текст игры</p>
          </CardContent>
          <CardFooter>
            <Button>Скачать</Button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Название игры</CardTitle>
            <CardDescription>1231231</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Текст игры</p>
          </CardContent>
          <CardFooter>
            <Button>Скачать</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
