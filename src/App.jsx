import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Mail, Twitter, Github } from "lucide-react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center">
        <Avatar className="mr-4">
          <AvatarImage src="/placeholder-avatar.png" />
          <AvatarFallback>DC</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">DeWitt Clinton</h1>
      </header>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
        <p>Hi, I'm DeWitt Clinton, a software engineer based in San Francisco. I have a passion for building innovative web applications and solving complex problems. With over 5 years of experience in the industry, I specialize in front-end development using modern technologies like React and Tailwind CSS.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>A brief description of Project 1</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
              <CardDescription>A brief description of Project 2</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
        <div className="mb-4 flex space-x-4">
          <a href="mailto:dewitt@example.com" className="flex items-center space-x-2 hover:text-primary">
            <Mail className="h-5 w-5" />
            <span>dewitt@example.com</span>
          </a>
          <a href="https://twitter.com/dewittclinton" className="flex items-center space-x-2 hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
            <span>@dewittclinton</span>
          </a>
          <a href="https://github.com/dewittclinton" className="flex items-center space-x-2 hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span>dewittclinton</span>
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </div>
  );
}

export default App;
