# Mergent Example - Express

This is an example Express app to show how you can use Mergent with Express.

## Getting Started

1. Run the Express development server with `npm run dev`
2. Start ngrok to get a publicly accessible URL with `ngrok http 3000` ([ngrok + Mergent docs](https://docs.mergent.co/guides/localhost-dev-and-webhooks))
3. Set your Mergent API Key and base URL from ngrok in `create-task.js`

Run `npm run create-task` to create a task and run the example.

You can view the tasks in the [Mergent console](https://app.mergent.co/tasks).

Logs will be shown in the Node.js console.

## Learn More

To learn more about Mergent, take a look at the following resources:

- [Mergent JavaScript / TypeScript Library](https://github.com/mergentlabs/mergent-js)
- [Mergent Documentation](https://docs.mergent.co)
- [Mergent API Reference](http://api.mergent.co/docs)
