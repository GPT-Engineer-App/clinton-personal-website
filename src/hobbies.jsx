import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hobbies() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-3xl font-bold">My Hobbies</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Photography</CardTitle>
            <CardDescription>Capturing moments in time</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hiking</CardTitle>
            <CardDescription>Exploring the great outdoors</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
