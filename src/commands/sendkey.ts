import md5 from 'md5';
const TCKEY = process.env.TCKEY;
const OWN_URL = process.env.OWN_URL;

const replyToMessage = (ctx: any, messageId: string, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const sendkey = () => (ctx: any) => {

  const messageId = ctx.message.message_id;
  const userName = ctx.from.last_name ? `${ctx.from.first_name} ${ctx.from.last_name}` : ctx.from.first_name;
  const sendkey = ctx.from.id +'T'+md5(TCKEY+ctx.from.id);

  const site_url = String(OWN_URL);

  replyToMessage(ctx, messageId, `${userName} , Your sendkey is 🔑 ${sendkey} \n 
  🚀 Use follow url to send message : \n 
  ${site_url}/api/send?sendkey=<sendkey>&text=<text>`);
  // replyToMessage(ctx, messageId, `Hello, ${userName} (user_id: ${ctx.from.id})! \n Your Message id is: ${messageId}`);
};

export { sendkey };
