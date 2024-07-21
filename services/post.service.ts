"use server";

export async function fetchPosts(
  page: number,
  pageSize: number,
  tags: string[],
) {
  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/posts/filter?page=${page}&pageSize=${pageSize}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tags,
      }),
    });

    if (!response.ok)
      throw new Error(
        "Une erreur s'est produite lors de la récupération des postes",
      );

    return response.json();
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function fetchPostById(
  id: string,
) {
  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/posts/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok)
      throw new Error(
        "Une erreur s'est produite lors de la récupération de la data générale du formulaire",
      );

    return response.json();
  } catch (err: any) {
    return { error: err.message };
  }
}
