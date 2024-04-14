import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hobbies() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">My Hobbies</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Photography</CardTitle>
            <CardDescription>Capturing moments in time</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">I have a passion for photography and love capturing the beauty of the world around me. From landscapes to portraits, I enjoy experimenting with different styles and techniques.</p>
            <p>Some of my favorite subjects to photograph include:</p>
            <ul className="list-disc pl-6">
              <li>Sunsets and sunrises</li>
              <li>Cityscapes at night</li>
              <li>Candid shots of people</li>
              <li>Nature and wildlife</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hiking</CardTitle>
            <CardDescription>Exploring the great outdoors</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Hiking is my favorite way to stay active and connect with nature. I love the challenge of reaching a summit and being rewarded with breathtaking views.</p>
            <p>Some of my most memorable hikes include:</p>
            <ul className="list-disc pl-6">
              <li>Hiking the Inca Trail to Machu Picchu</li>
              <li>Summiting Mount Kilimanjaro</li>
              <li>Trekking through the Himalayas</li>
              <li>Exploring the national parks of the western United States</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
