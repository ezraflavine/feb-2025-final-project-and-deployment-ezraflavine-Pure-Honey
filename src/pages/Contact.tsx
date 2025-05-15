
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from '@/components/ui/use-toast';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
    }, 1500);
  }

  return (
    <div>
      <HeroSection 
        title="Get In Touch" 
        subtitle="Have questions about our honey products? We're here to help"
        image="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Contact Information" />
              <div className="mb-8">
                <h3 className="text-xl font-bold text-honey-700 mb-2">Visit Our Farm</h3>
                <address className="not-italic">
                  <p>123 Bee Lane, Honey Valley</p>
                  <p>Meadowshire, MS 12345</p>
                </address>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-honey-700 mb-2">Hours of Operation</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-honey-700 mb-2">Contact Details</h3>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@purenaturalhoney.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-honey-700 mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-honey-600 hover:text-honey-700">Facebook</a>
                  <a href="#" className="text-honey-600 hover:text-honey-700">Instagram</a>
                  <a href="#" className="text-honey-600 hover:text-honey-700">Twitter</a>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle title="Send Us a Message" />
              <div className="bg-white p-6 rounded-lg shadow">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Question about your honey products" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please enter your message here..." 
                              rows={6}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="honey-btn w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-honey-50">
        <div className="container-custom">
          <SectionTitle 
            title="Find Us" 
            subtitle="Visit our honey farm and shop"
            centered
          />
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for a map - in a real implementation, you would use a Google Maps embed or similar */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-lg">Map Placeholder - In a real implementation, this would be an interactive map</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <h3 className="text-xl font-bold text-honey-700 mb-2">Do you ship internationally?</h3>
              <p>Yes, we ship to select international destinations. Shipping rates and delivery times vary by country. Please contact us for specific information.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <h3 className="text-xl font-bold text-honey-700 mb-2">Is your honey raw and unfiltered?</h3>
              <p>Absolutely! All our honey is raw, unfiltered, and never heated above hive temperature to preserve all the natural enzymes and beneficial properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <h3 className="text-xl font-bold text-honey-700 mb-2">How should I store my honey?</h3>
              <p>Store your honey at room temperature in a dry place. Avoid refrigeration as it speeds up crystallization. If your honey crystallizes, simply place the jar in warm water to return it to liquid form.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-honey-200">
              <h3 className="text-xl font-bold text-honey-700 mb-2">Do you offer wholesale options?</h3>
              <p>Yes, we offer wholesale pricing for businesses. Please contact us directly to discuss your requirements and receive our wholesale catalog.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
