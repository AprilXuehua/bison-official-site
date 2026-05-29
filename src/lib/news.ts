import { supabase } from "./supabase";

export type NewsItem = {
  id: number;
  title: string;
  url: string;
  thumbnail: string | null;
  published_at: string;
};

export async function fetchNews(limit?: number): Promise<NewsItem[]> {
  const query = supabase
    .from("news")
    .select("id, title, url, thumbnail, published_at")
    .order("published_at", { ascending: false });

  const { data, error } = await (limit ? query.limit(limit) : query);

  if (error) {
    console.error("fetchNews error:", error.code, error.message, error.details, error.hint);
    return [];
  }

  return data || [];
}

export function formatNewsDate(dateStr: string): string {
  return dateStr.replace(/-/g, ".");
}
