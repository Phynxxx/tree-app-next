import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FeedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b px-4 py-3 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          <InstagramIcon className="w-6 h-6" />
          <span className="sr-only">Instagram</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            <HomeIcon className="w-6 h-6" />
            <span className="sr-only">Home</span>
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            <SearchIcon className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            <PlusIcon className="w-6 h-6" />
            <span className="sr-only">Create</span>
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            <HeartIcon className="w-6 h-6" />
            <span className="sr-only">Notifications</span>
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <span className="sr-only">Profile</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Card className="border-0 rounded-none shadow-none">
          <CardContent className="p-0">
            <img src="/placeholder.svg" width={400} height={400} alt="Image" className="object-cover aspect-square" />
          </CardContent>
          <CardFooter className="grid gap-2 p-2 pb-4">
            <div className="flex items-center w-full">
              <Button variant="ghost" size="icon">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link href="#" className="font-medium" prefetch={false}>
                  john
                </Link>
                Wow, this photo is absolutely stunning! 😍✨
              </div>
              <div>
                <span className="font-medium">125 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-muted rounded-full px-3 py-1 text-sm"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="border-0 rounded-none shadow-none">
          <CardContent className="p-0">
            <img src="/placeholder.svg" width={400} height={400} alt="Image" className="object-cover aspect-square" />
          </CardContent>
          <CardFooter className="grid gap-2 p-2 pb-4">
            <div className="flex items-center w-full">
              <Button variant="ghost" size="icon">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link href="#" className="font-medium" prefetch={false}>
                  jane
                </Link>
                This is such a beautiful shot! 🌇
              </div>
              <div>
                <span className="font-medium">89 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-muted rounded-full px-3 py-1 text-sm"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="border-0 rounded-none shadow-none">
          <CardContent className="p-0">
            <img src="/placeholder.svg" width={400} height={400} alt="Image" className="object-cover aspect-square" />
          </CardContent>
          <CardFooter className="grid gap-2 p-2 pb-4">
            <div className="flex items-center w-full">
              <Button variant="ghost" size="icon">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link href="#" className="font-medium" prefetch={false}>
                  alex
                </Link>
                Loving the colors in this shot! 🌈
              </div>
              <div>
                <span className="font-medium">67 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-muted rounded-full px-3 py-1 text-sm"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="border-0 rounded-none shadow-none">
          <CardContent className="p-0">
            <img src="/placeholder.svg" width={400} height={400} alt="Image" className="object-cover aspect-square" />
          </CardContent>
          <CardFooter className="grid gap-2 p-2 pb-4">
            <div className="flex items-center w-full">
              <Button variant="ghost" size="icon">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link href="#" className="font-medium" prefetch={false}>
                  sarah
                </Link>
                This is so cool! 😎
              </div>
              <div>
                <span className="font-medium">42 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-muted rounded-full px-3 py-1 text-sm"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="border-0 rounded-none shadow-none">
          <CardContent className="p-0">
            <img src="/placeholder.svg" width={400} height={400} alt="Image" className="object-cover aspect-square" />
          </CardContent>
          <CardFooter className="grid gap-2 p-2 pb-4">
            <div className="flex items-center w-full">
              <Button variant="ghost" size="icon">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link href="#" className="font-medium" prefetch={false}>
                  emma
                </Link>
                Wow, this is stunning! 😍
              </div>
              <div>
                <span className="font-medium">28 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-muted rounded-full px-3 py-1 text-sm"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="border-0 rounded-none shadow-none">
          <CardContent className="p-0">
            <img src="/placeholder.svg" width={400} height={400} alt="Image" className="object-cover aspect-square" />
          </CardContent>
          <CardFooter className="grid gap-2 p-2 pb-4">
            <div className="flex items-center w-full">
              <Button variant="ghost" size="icon">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link href="#" className="font-medium" prefetch={false}>
                  liam
                </Link>
                This is so creative! 🎨
              </div>
              <div>
                <span className="font-medium">15 likes</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-muted rounded-full px-3 py-1 text-sm"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

function BookmarkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function HeartIcon(props :any ) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MessageCircleIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function PlusIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
