'use client';

import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function MotivationalMessage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h2 className="text-xl font-semibold">Motivation of the Day</h2>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
          Believe you can and you're halfway there.
        </p>
      </CardContent>
    </Card>
  );
}
