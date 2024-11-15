export const requestHelper = async (
  url,
  method = "GET",
  body = {},
  headers = {}
) => {
  const { idToken = null, refreshToken = null, ...customHeaders } = headers;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Client-Type": "mobile",
      Authorization: idToken ? `Bearer ${idToken}` : undefined,
      "X-Refresh-Token": refreshToken || undefined,
      ...customHeaders,
    },
    credentials: "include",
  };

  if (body && method !== "GET" && method !== "HEAD") {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    console.log("Success response: ", result);

    return {
      data: result.data,
      status: result.status,
      path: result?.path,
      success: result?.success,
      idToken: result?.idToken,
      refreshToken: result?.refreshToken,
    };
  } catch (error) {
    return handleError(error);
  }
};

const handleError = (error) => {
  let errorMessage;

  if (error) {
    // Si el error viene de una respuesta HTTP al servidor
    errorMessage = error.serverError || null;
  } else if (error instanceof Error) {
    // Si es otro tipo de error
    errorMessage = error.message || "Error in responses.";
  }

  console.error("Error details: ", error);

  return {
    data: errorMessage,
    status: error.status,
    path: error?.path,
    success: error?.success,
    idToken: error?.idToken,
    refreshToken: error?.refreshToken,
  };
};
